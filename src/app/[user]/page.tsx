 export  default function UserPage(props:any){

    console.log(props);  {/**
        { params: { user: 'user' }, searchParams: {} }  or 
{ params: { user: '1' }, searchParams: {} }  or  
{ params: { user: '2000000' }, searchParams: {} } */}

    return(
        <div>
            <h1>Dynamic User Page</h1>
        </div>
    )

}
{/**Each page in the pages directory (or app directory for Next.js 13) must have a default export that is a valid React component. */}