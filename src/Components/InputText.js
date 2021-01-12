function InputText(props) {
  const styleInput = {
    marginRight: '20px',
    height: '30px',
    outline: 'none',
    borderRadius: '5px',
    border: 'none',
    fontSize: '20px',
    color: '#333',
    textTransform: 'uppercase',
    fontWeight: 'bold',

  }
 return(
   
   <input placeholder={props.value} style={styleInput} type='text' onChange={(e) => {
     props.getValue(e.target.value, props.index)
   }} />
 )
}

export default InputText;
