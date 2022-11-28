export const getUsers = async() => {
    const data = await fetch("http://localhost:3000/users/getAll");
    const users = await data.json()
    return users;
}

const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const setUsers = async(info) => {
    console.log({body: JSON.stringify(info),...init})
    const data = await fetch("http://localhost:3000/users/add",{body: JSON.stringify(info),...init});
    const users = await data.json()
    return users;
}