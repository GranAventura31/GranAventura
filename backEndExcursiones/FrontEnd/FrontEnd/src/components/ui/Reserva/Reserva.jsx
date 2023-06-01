import React, {useState} from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import Modal from 'react-modal'
import {Field} from 'react'
import swal from 'sweetalert2';
import { FormGroup,Input,Label } from 'reactstrap'

export const Reserva = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  // const [colegio, setColegio] = useState("");
  const [telefono, setTelefono] = useState("");

  const [elejirColegio, setElejirColegio] = useState()
  const [transaccion, setTransaccion] = useState()

  
  const cambioRadioColegio=e=>{
    setElejirColegio(e.target.value)
  }

  const cambioRadioTransaccion=e=>{
    setTransaccion(e.target.value)
  }
  

  const alertaCampos = () =>{
    swal.fire({
      icon: 'error',
      text: 'Algún Campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300' 
    })
  }
  
  const openModal = (e) => {
    
    e.preventDefault()
    if (nombre === '' || correo === ''  || telefono === '') {
      alertaCampos();
    }else{
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  let Transaccion1 = transaccion
  let Colegio1 = elejirColegio
  console.log(Transaccion1);
  console.log(Colegio1);

  return (
    <div className="form-box-Reserva">
            <h1 >¡Reserva aqui!</h1>
            <form action="#" >
              <div className='input-box'>
                <span className='icon'>
                  <MdEmail />
                </span>
                <input type="email" name="correo" onChange={(e) => {setCorreo(e.target.value)}}  required />
                <label>Correo</label>
              </div>
              <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="text" name="nombre" onChange={(e) => {setNombre(e.target.value)}}  required/>
                  <label>Nombre Completo</label>
              </div>
              <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="number" name="telefono" onChange={(e) => {setTelefono(e.target.value)}}  required/>
                  <label>Telefono</label>
              </div>
              <div>
              <FormGroup>
                <FormGroup>
                  <Input type="radio" className='radio1' value='Colegio' onChange={cambioRadioColegio} checked={elejirColegio == 'Colegio' ? true: false}/>
                  <Label for='radio1'>colegio</Label>
                </FormGroup>
                <FormGroup>
                  <Input type="radio" className='radio2' value='No Colegio' onChange={cambioRadioColegio} checked={elejirColegio == 'No Colegio' ? true: false}/>
                  <Label for='radio2' className='radio2'>No colegio</Label>
                </FormGroup>
              </FormGroup>
              </div>
              {/* <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="text" name="colegio" onChange={(e) => {setColegio(e.target.value)}}  required/>
                  <label>Colegio o persona del comun</label>
              </div> */}
              
              <button type='submit' className="btnReserva" onClick={openModal}> Reservar </button>
            </form>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal" 
            className="reservaModal">
              <div>
              <h1 className='h1reservaModal'>¡Gracias por confiar en nosotros!</h1>
              <img src="https://res.cloudinary.com/dlohqvzri/image/upload/v1684447771/imagen3_spwtu2.jpg" alt="" className='imagenReservaModal1'/>
              <h2 className='h2reservaModal'>Reserva de la excursión</h2>
              <p className='p1reservaModal'>Este paquete lleva todo lo que les de la gana</p>
              <p>-{correo}</p>
              {/* <p>-{nombre}</p>
              <p>-{framework}</p> */}
              <FormGroup className='FormGroup'>
                <div>
                <FormGroup>
                  <Input type="radio" className='boletas1' value='Boletas' onChange={cambioRadioTransaccion} checked={transaccion == 'Boletas' ? true: false}/>
                  <Label for='boletas1'>Boletas</Label>
                </FormGroup>
                </div>
                <div>
                <FormGroup>
                  <Input type="radio" className='transaccion2' value='Transaccion' onChange={cambioRadioTransaccion} checked={transaccion == 'Transaccion' ? true: false}/>
                  <Label for='transaccion2' className='radio2'>Transaccion</Label>
                </FormGroup>
                </div>
              </FormGroup>

              <button className='btnReserva'>Reservar</button>
              
              </div>
              
              {/* <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl> */}
            </Modal>
    </div>
  )
}