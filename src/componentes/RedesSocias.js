
function RedesSociais(props){
   
        return(
            <ul className="redesSocias">
                {props.icons.map(icon => {return(<li key= {icon}> <img alt={icon} src={'/' + icon}></img></li>)} )}
            </ul>
        )
    

}export default RedesSociais;