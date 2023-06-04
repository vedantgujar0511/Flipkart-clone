import { Dialog ,Box,TextField,Typography,Button,styled, DialogContent} from "@mui/material"
import { useState, useContext} from "react";
import { authenticateSignup,authenticateLogin } from "../service/api";
import { DataContext } from "../context/DataProvider";


const Component = styled(DialogContent)`
height: 65vh;
width:70vh;
padding: 0;
padding-top: 0;
overflow: hidden;
`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 73% no-repeat;
width:28%;
height:100%;
padding : 45px 35px;
& > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600
}
`;

const Wrapper = styled(Box)`
display: flex;
flex-direction:column;
padding: 25px 35px;
flex:1;
& > div, & > Button, &,& > p{
    margin-top: 20px;
}
`;

const LoginButton = styled(Button)`
text-transform:none;
background:#FB641B;
color:#FFF;
height:48px;
border-radius:2px;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;
const OtpButton = styled(Button)`
text-transform:none;
background:#FFF;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const createToggleAccount = {
    login:{
        view:'login',
        heading: 'Login',
        subHeading : 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
};
const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const loginInitialValues = {
    username:'',
    password:''
}



const LoginDialog =({open,setOpen}) =>{
    
    
    const [account,toggleAccount] = useState(createToggleAccount.login);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const {setAccount} = useContext(DataContext);
    const [login,setLogin] = useState(loginInitialValues);
    const[error,setError] = useState(false);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(createToggleAccount.login);
        setError(false);
    }

    const toggleSignup = () =>{
        toggleAccount(createToggleAccount.signup);
    } 
    const toggleLogin = () => {
        toggleAccount(createToggleAccount.login);
    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }
    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }
    const signupUser = async() =>{
      let response =  await authenticateSignup(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.firstname);
    }
    const loginUser = async() =>{
        let response =  await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
       
    }

        return(
            <Dialog open = {open} onClose = {handleClose}>
                <Component>
                    <Box style={{display:'flex',height:'100%', width: '100%'}}>
                        <Image>
                            <Typography variant = "h5">{account.heading}</Typography>
                            <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                        </Image>
                       {  account.view === 'login' ?
                       <Wrapper>
                            <TextField id="standard-basic" onChange={(e) => onValueChange(e)} name ='username' label="Enter username" variant="standard" />
                            <TextField id="standard-basic" onChange={(e) => onValueChange(e)} name ='password' label="Enter password" variant="standard" />  
                            {error &&<Error>Please enter valid Username and Password</Error>  }               
                            <Text>By continuing, you agree to flipKart's terms and conditions</Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style = {{textAlign : 'center'}}>OR</Typography>
                            <OtpButton>Request OTP</OtpButton>
                            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart?Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name="firstname" label="First name" variant="standard" />
                            <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name="lastname" label="Last Name" variant="standard" />                   
                            <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name="username" label="User Name" variant="standard" />
                            <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name="email" label="Email" variant="standard" />                           
                            <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name="password" label="Password" variant="standard" />
                            <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name="phone" label="Phone" variant="standard" />
                            <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                            <OtpButton onClick={() => toggleLogin()}>Exisiting user? Login</OtpButton>

                        </Wrapper>}
                    </Box>
                </Component>    
            </Dialog>
        )
}

export default LoginDialog;