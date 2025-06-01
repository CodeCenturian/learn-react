import React from 'react'

const UserContext = React.createContext();

export default UserContext;

/*
1. when we make a context we have to make a provider with it.
2. we can then wrap it like this and the contents in betwenn will get the access to the data item
<UserContext>
<Login/>
<Card>
    <Dashboard/>
</Card>
<UserContext/>
*/
