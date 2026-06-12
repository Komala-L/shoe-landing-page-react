const Hero = () => {
    return (
        <main className="h-160 w-full bg-gray-700 text-white flex items-center justify-around">
            <div className="hero-content w-150">
                <h1 className="text-7xl pb-6">YOUR FEET DESERVE BEST</h1>
                <p className="text-2xl">
                    Experience the comfort and style you deserve with our premium footwear collection.<br></br>
                    Let us take care of your feet!
                </p>

                <div className="hero-btn gap-5 flex items-center pt-4">
                    <button className="btn1 h-12 w-30 border border-black border-2 bg-red-900">Shop Now</button>
                    <button className="btn2 h-12 w-30 border border-black border-2 bg-red-900">Category</button>
                </div>

                <div className="shopping">
                    <p className="pt-24">Also Available On</p>
                    <div className="shopping-icons flex items-center gap-2 overflow-hidden pt-3">
                        <img className="w-14 h-14" src="https://play-lh.googleusercontent.com/0-sXSA0gnPDKi6EeQQCYPsrDx6DqnHELJJ7wFP8bWCpziL4k5kJf8RnOoupdnOFuDm_n"></img>
                        <img className="w-14 h-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2yYz5k-8e_pjhAVTY296TIUvQVW7jFSAKw&s"></img>
                    </div>
                </div>
            </div>

            <div className="h-[500px] w-[600px] flex items-center justify-center overflow-hidden">
                <img className="h-full w-full object-cover" src="https://static.dezeen.com/uploads/2018/04/nike-3d-printed-shoes-london-marathon_dezeen_2364_col_2.jpg"></img>
            </div>
        </main>
    );
};

export default Hero;