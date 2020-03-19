import React from 'react';
import Button from '../../components/Button/Button';
import search from '../../assets/img/search.svg';

const ButtonPage = () => {
    return (
        <div>
            <Button color='blue'>Blue</Button>            
            <br/>
            <Button color='red'>Red</Button>
            <br/>
            <Button img={search} color='blue'>Img Blue</Button>
            <br/>
            <Button img={search}></Button>
            <br/>
            <Button img={search} color='blue'></Button>
            <br/>
            <Button color='blue' onClick={()=>{alert('Нажата кнопка')}}>Event</Button>            
            <br/>
        </div>
    );
};

export default ButtonPage;