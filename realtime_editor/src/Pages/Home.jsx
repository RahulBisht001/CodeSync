import React from 'react'
import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'


const Home = () => {

    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')

    const createNewRoom = (e) => {
        e.preventDefault()

        const id = uuidV4()
        // console.log(id)
        setRoomId(id)

    }

    return (
        <div className='homePageWrapper'>
            <div className="formWrapper">
                <img
                    className='homePageLogo'
                    src="/codeSync.png"
                    alt="Logo" />
                <h4 className='mainLabel'>Paste invitation Room ID</h4>

                <div className='inputGroup'>
                    <input
                        type="text"
                        className='inputBox'
                        placeholder='Room Id'
                        onChange={(e) => {
                            setRoomId(e.target.value)
                            console.log(e.target.value)
                        }
                        }
                        value={roomId}
                    />

                    <input
                        type="text"
                        className='inputBox'
                        placeholder='User Name'
                        onChange={(e) => {
                            setUserName(e.target.value)
                            console.log(e.target.value)
                        }
                        }
                        value={userName}
                    />


                    <button className='btn joinBtn'>
                        Join
                    </button>

                    <span className='createInfo'>
                        If you don't have an invite then create &nbsp;
                        <a
                            href="/editor"
                            className='createNewBtn'
                            onClick={createNewRoom}
                        >
                            New Room
                        </a>
                    </span>
                </div>
            </div>

            <footer>
                <h4>Made with 💖 By &nbsp;
                    <a href="https://github.com/RahulBisht001/CodeSync">RahulB</a>
                </h4>
            </footer>
        </div>
    )
}

export default Home