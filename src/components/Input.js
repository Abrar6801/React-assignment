import Papa from "papaparse";
import classes from './Input.module.css';
const Input=(props)=>{
    const submitHandler = (event) => {
        event.preventDefault();
        Papa.parse(props.myCSV, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            props.setInventoryData(results.data);
          },
        });
      };
      const fileuploadHandler = (event) => {
        props.setCSV(event.target.files[0]);
      };
    return(
        <form onSubmit={submitHandler}>
        <center><input
          type="file"
          name="input-file"
          className={classes.input}
          accept=".csv"
          onChange={fileuploadHandler}
        ></input></center>
        <br/>
        <center><button type="submit" className={classes.button}>
          submit
        </button></center>
      </form>
    );

};
export default Input;