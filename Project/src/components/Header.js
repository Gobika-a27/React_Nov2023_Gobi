import { AppBar,Tab,Tabs, Typography,Toolbar,Button,useMediaQuery,useTheme} from '@mui/material'
import React, {useState} from 'react'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Drawercomp from './Drawercomp';
import {Link} from 'react-router-dom';
const PAGES =["Home","Products","Services","Aboutus","Contactus"];
const Header =()=>{
    const[value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar sx={{background:"#566573"}}> 
                <Toolbar>
                    <ShowChartIcon/>
                    {
                        isMatch ? (
                        <>
                        <Typography sx={{fontSize: '1.5rem',paddingLeft: '10%'}}>STOCK MANAGEMENT</Typography>
                        <Drawercomp/>
                        </>

                        ) : (
                            <>
                                 <Tabs 
                         textColor="inherit"
                     value={value}
                      onChange={(e,value)=> setValue(value)} 
                      indicatorColor="secondary">
                        {
                            PAGES.map((page,index) => (
                                <Tab key={index} label ={page}/>
                               
                            ))
                        }
                        
                        
                    </Tabs>
                    <Button component={Link} to={"/Login"} sx={{marginLeft:'auto'}} variant="contained">Login{" "}</Button>
                    <Button component={Link} to={"/SignUp"} sx={{marginLeft:"10px"}} variant="contained">SignUp{" "} </Button>
                            </>
                        )
                    }
    
                    
                </Toolbar>
                
            </AppBar>
        </React.Fragment>
    )
}  
export default Header;