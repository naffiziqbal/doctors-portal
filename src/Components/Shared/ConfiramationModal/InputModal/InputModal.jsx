import React from "react";
import UserContext, { AuthProvider } from "../../../../USerContext/UserContext";

const InputModal = ({ userData, updateUser, setUpdateUser }) => {
  // const {user} = UserContext(AuthProvider)
  console.log(userData);
  const updateName = (e) => {
    e.preventDefault()
    const name = e.target.displayName.value;
    console.log(name);

    // fetch(`http://localhost:5000/dashboard/user/${userData._id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(name),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data).catch((err) => console.log(err)));
  };
  const closeModal = ()=>{
    setUpdateUser(null)
  }
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="inputModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box modal-action">
          <form onSubmit={updateName} htmlFor="inputModal">
            <h3 className="font-bold text-lg">
              name: {updateUser?.displayName}
            </h3>
            <label htmlFor="">
              Enter Updated Name : <br />
              <input
                className="border border-slate-200 p-2 w-full rounded-lg outline-none"
                type="text"
                name="displayName"
                placeholder="Enter You Desireable Name"
              />
            </label>
            <div className="">
              <input
                type="submit"
                onClick={closeModal}
                className="btn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
