import React from 'react';
import BurgerMenu from '../../../Components/BurgerMenu';
import "./style.scss";


const ChauxFine = () => {
    return (
        <>
            <BurgerMenu />
            <h2>ENDUITS DECORATIFS</h2>

            <div className='all_sections'>

                <div className='section'>
                    <div className='duo_img'>
                        <img
                            src={'/beton.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        />
                        {/* <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        /> */}
                    </div>
                    <h3>FINITION FERREE</h3>
                    <p>
                        Aspect très lisse, légèrement brillant à satiné, presque marbré. Touché très doux voir soyeux.
                        Rendu : chic et minéral. Il peut être idéal dans des hôtels ou intérieurs contemporain
                    </p>
                </div>

                <div className='section'>
                    <div className='duo_img'>
                        <img
                            src={'/beton.jpg'}
                            alt={'illustration de revêtement muraux'}
                            className='image'
                        />
                        {/* <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de revêtement muraux'}
                            className='image'
                        /> */}
                    </div>
                    <h3>FINITION LISSEE</h3>
                    <p>
                        Lisse, mat à légèrement satiné, sans brillance marquée.
                        Rendu : Plus sobre et naturel, convient à des intérieurs modernes, scandinaves ou rustiques-chic.
                    </p>
                </div>

                <div className='section'>
                    <div className='duo_img'>
                        <img
                            src={'/beton.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        />
                        {/* <img
                            src={'/IMG_3684.jpg'}
                            alt={'illustration de béton ciré'}
                            className='image'
                        /> */}
                    </div>
                    <h3>FINITION BADIGEON</h3>
                    <p>
                        Sous forme liquide, mise en œuvre à la brosse.
                        Mate, légèrement nuagée, parfois poudrée, la finition laisse apparaître un léger cordage. Son touché est grainé et crayeux. Le rendu en est d’autant plus authentique.
                        Idéal pour des ambiances douces, naturelles, provençales ou méditerranéennes.
                    </p>
                </div>

            </div >
        </>
    )
}

export default ChauxFine