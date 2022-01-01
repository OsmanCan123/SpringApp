import React, { Component } from 'react';
import axios from 'axios';

function getDisplayName(WrappedComponent){

    return WrappedComponent.displayName || WrappedComponent.name || 'Component';

}




export function withApiProgress(WrappedComponent, apiPath){

    return  class extends Component {

        static displayName = 'ApiProgress(${getDisplayname(WrappedComponent)})';
        //static displayName = 'ApiProgress(' + getDisplayName(WrappedComponent)+')';

        state = {
            pendingApicall: false
    
    
        };
    
        componentDidMount(){
           this.requestInterceptor = axios.interceptors.request.use(request =>{
                console.log("runnging request interceptor", apiPath);
               this.updateApiCallFor(request.url, true);
                return request;
    
            });
    
           this.responseInterceptor= axios.interceptors.response.use(response =>{
                this.updateApiCallFor(response.config.url, false);
                return response;
            }, error =>{
                this.updateApiCallFor(error.config.url, false);
                throw error;
            });
    
    
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.request.eject(this.responseInterceptor);


        }
    
        updateApiCallFor = ( url, inProgress) => {
            if(url === apiPath){
                this.setState({ pendingApicall: inProgress});
            }
    
        }
        render() {
    
            const { pendingApicall} = this.state;
            //return <div>{React.cloneElement(this.props.children,{ pendingApicall })}</div>
            return <WrappedComponent pendingApicall = {pendingApicall} {...this.props} />
        }
    }

}



