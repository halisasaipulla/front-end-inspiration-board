// import React, { useState } from 'react'

// const BoardForm =() => {
// const [title,setTitle]=useState('');
// const [owner,setOwner]=useState('');
// const handleTitleChange = (e) => { setTitle(e.target.value) };
// const handleOwnerChange = (e) => { setOwner(e.target.value) };

// const submitBoard = (e) => {
//   e.preventDefault();
//   props.createNewBoard({ title, owner });
//   setTitle('');
//   setOwner('');
// };

//     return (
//         <div>
//             <form>
//                 <label>Title</label>
//                 <input 
//                     type='text' 
//                     value={title}
//                     onChange={handleOwnerChange}
//                     placeholder='Add a title'

//                 />
//                 <label>Owner</label>
//                 <input 
//                     type='text' 
//                     value={owner}
//                     onChange={handleOwnerChange}
//                     placeholder='Add a owner name'

//                 />

//                 <button>Submit</button>
//             </form>
            

//         </div>
//     )
// }
// export default BoardForm