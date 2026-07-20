function Footer({name,year,msg}){
 return(
    <div id="footer">
        <p>{name}</p>
        <p>{year}</p>
        <p id="msg">{msg}</p>
    </div>
 )
}

export default Footer;