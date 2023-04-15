import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import toast from 'react-hot-toast'


const Home = () => {

    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')

    const navigate = useNavigate()

    const createNewRoom = (e) => {
        e.preventDefault()

        const id = uuidV4()
        // console.log(id)
        setRoomId(id)
        toast.success('Created a New Room')
    }

    const joinRoom = () => {

        if (!roomId || !userName) {
            toast.error('Room Id and User Name are required')
            return
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                userName,
            },
        })
    }

    const handleInputEnter = (e) => {

        if (e.code === 'Enter') {
            joinRoom()
        }
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
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />

                    <input
                        type="text"
                        className='inputBox'
                        placeholder='User Name'
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        onKeyUp={handleInputEnter}
                    />


                    <button
                        className='btn joinBtn'
                        onClick={joinRoom}
                    >
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