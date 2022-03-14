import React, {Component} from 'react'

class Form extends Component {
  state={
    name:"",
    dept:"",
    rating:"",
    user:[],
}
handleChange=(para)=>{
    this.setState({
    [para.target.name]:para.target.value
})
}

handleSubmit=(para)=>{
    para.preventDefault()
    console.log(this.state);

    var tempArr=[]
    console.log(tempArr);
    var tempObj={
    name: this.state.name,
    dept: this.state.dept,
    rating: this.state.rating
    }

    tempArr=this.state.user
    tempArr.push(tempObj)
    this.setState({user:tempArr})
    this.setState({name:'',dept:'',rating:''})
    console.log(this.state.user);
}

render() {
return (
  <>    
    <div className="body">
        <div className="heading">EMPLOYEEE FEEDBACK FORM</div>
        <form>
          <label for="name">Name:</label>
            <input type="text" name="name" id="name" className='name'  value={this.state.name} onChange={this.handleChange} /><br />
            <label for="dept">Department:</label>
            <input type="text" name="dept" id="dept" className='dept' value={this.state.dept} onChange={this.handleChange} /><br />
            <label for="rating">Rating:</label>
            <input type="number" name="rating" id="rating" className='rating' value={this.state.rating} onChange={this.handleChange} /><br />
            <button className='sub' onClick={this.handleSubmit}>Submit</button>
        </form>
        <div className="container">
        {this.state.user.map((item,index)=>{
            return(
                <div key={index} className='inbox'>
                Name : {item.name} || Department :  {item.dept} || Rating {item.rating}
          </div>
                
            )
      })}
        </div>

        </div>

  </>
  )
 }
}
export default Form