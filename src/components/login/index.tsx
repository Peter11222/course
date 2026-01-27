import React from 'react'
import { LoginWrapper } from './style'
import { Button } from 'antd'

const Login: React.FC = () => {

    return <LoginWrapper>
        <img src={require('@/assets/img/bg.png')} alt="start"/>
        <div className='logo'>
            <img src={require('@/assets/img/u12.png')} alt="logo" />
            <span>在线课程管理系统</span>
        </div>
        <div className='base'>
            <p>欢迎您！请登录</p>
            <div className='form'>
            <div className='user'>
            <img src={require('@/assets/img/u10.png')} alt="username"/>
            <input type='text' placeholder='请输入用户名称'/>
            </div>
            <div className='password'>
                <img src={require('@/assets/img/u11.png')} alt="password"/>
            <input type='text' placeholder='请输入登录密码'/>
            </div>
            <div className='btn'>
                <Button type='primary'>登录</Button>
            </div>
        </div>
            
            
        </div>
        
    </LoginWrapper>
}

export default Login