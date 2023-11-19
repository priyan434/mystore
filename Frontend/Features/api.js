export const setheader=()=>{
    const header={
        headers:{
            'x-auth-token':localStorage.getItem('token'),
        },
    }
    return header
}