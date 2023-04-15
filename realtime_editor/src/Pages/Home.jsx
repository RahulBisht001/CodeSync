import React from 'react'

const Home = () => {
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
                    />

                    <input
                        type="text"
                        className='inputBox'
                        placeholder='User Name'
                    />


                    <button className='btn joinBtn'>
                        Join
                    </button>

                    <span className='createInfo'>
                        If you don't have an invite then create &nbsp;
                        <a href="/editor" className='createNewBtn'>
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