import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from "react-hook-form";
import logo from '../assets/img/flatsy_nest.png';

type FormData = {
  email: string;
  registerToHebdo: boolean;
  registerToHappiness: boolean;
  registerToCodeKataDojo: boolean;
};

export default function Newsletter() {  
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <Container>
      <Box   
        sx={{ 
          marginTop: '104px', 
          padding: '0px', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          width: '337px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:'#FFF',
          borderRadius: '8px',
          boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Box component="img" src={logo} alt="logo" sx={{ marginTop: "38px", marginBottom:"11px"}} />
        <Typography sx={{ color: '#4EA9D3', fontSize:'20px', fontWeight:700, marginBottom:"24px"}}>
          Inscription à la newsletter
        </Typography>
          
        <Box component="form" 
          noValidate 
          onSubmit={onSubmit}  
          sx={{ 
            mt: 1,
            mb: 1, 
            width:"100%",
          }}>
          
          <Box sx=
            {{ 
              backgroundColor:'rgba(75, 111, 129, 0.4)', 
              paddingLeft:"32px",
              paddingRight:"32px", 
              paddingTop:"23px",
              paddingBottom:"23px"
            }}>
            
            <TextField
              
              margin="normal"
              fullWidth
              required
              label="Email"
              autoComplete="email"
              autoFocus
              sx=
                {{ backgroundColor:'#FFF', 
                  radius:"8px", 
                  borderRadius: '8px', 
                  borderColor:'rgba(0, 0, 0, 0.38)' 
                }}
              {...register("email", { required: true, })}
            />
          </Box>
          
          <Box 
            sx= {{ paddingLeft:"32px", paddingRight:"32px", paddingTop:"24px", display: 'flex', flexDirection: 'column' }}>      
            <FormControlLabel
              sx = {{ paddingLeft:"36px", paddingRight:"36px"  }}
              control={<Checkbox color="primary" />}
              label="L'hebdo de la visite"
              {...register("registerToHebdo")}
            />
            
            <FormControlLabel
              sx = {{ paddingLeft:"36px", paddingRight:"36px"  }}
              control={<Checkbox color="primary" />}
              label="Happiness"
              {...register("registerToHappiness")}
            />

            <FormControlLabel
              sx = {{ paddingLeft:"36px", paddingRight:"36px"  }}
              control={<Checkbox color="primary" />}
              label="Code Kata Dojo"
              {...register("registerToCodeKataDojo")}
            />

            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                marginTop: "43px", marginBottom: "43px", 
                padding:"20px", 
                boxShadow: "0px 0px 0px 1px rgba(19, 45, 74, 0.08)",
                height: "40px",
                backgroundColor: "rgba(42, 165, 223, 1)",
                textTransform: "none",
              }}
            >
            Je m'inscris
          </Button>
         </Box>
        </Box>
      </Box>
    </Container>
  );
}