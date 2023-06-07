function Menu(props) {
  /*6*/
    function clickHandler(event){
      const name = event.target.value;
      props.onSelectVideo(name);
    }
      return (
        /*5/ 7*/
            <form onClick={clickHandler}>
                <input type="radio" name="src" value="fast"/> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
          );
  };
  
  export default Menu;