import React from 'react';
import Input from './../../components/Input/Input';
import user from '../../assets/img/user.svg';
import search from '../../assets/img/search.svg';

const InputPage = () => {
    return (
        <div>
            <Input id='basic' placeholder='Enter something'/>
            <br/>
            <Input id='basic2' placeholder='small' size='small'/>
            <br/>
            <Input id='basic3' placeholder='normal' size='normal'/>
            <br/>
            <Input id='basic4' placeholder='big' size='big'/>
            <br/>
            <Input id='basic5' placeholder='Enter your name' size='normal' label='Name'/>
            <br/>
            <Input id='basic6' placeholder='Enter your Email' size='normal' label='Email'/> 
            <br/>
            <Input id='basic7' placeholder='Enter your Email' size='normal' label='Email' value='testemail@test,com' error='Email invalid' onChange={()=>{}}/> 
            <br/>
            <Input id='basic8' placeholder='Enter login' size='normal' img={user} />
            <br/>
            <Input id='basic9' placeholder='Enter word' size='small' img={search} />
        </div>
    )
}

export default InputPage
