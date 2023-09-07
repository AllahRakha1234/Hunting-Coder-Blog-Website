import React from 'react'
import style from '../styles/About.module.css'
import Link from 'next/link'

const About = () => {
    return (
        <main className={style.main}>
            <h1 className={`${style.titleAbout}`}>About Hunting Coder</h1>
            <h2 className={`${style.headings}`}>Introduction</h2>
            <p className={`${style.headingContent}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore natus vitae animi mollitia numquam amet! Iusto harum voluptate, fugit odio ab amet quia beatae sed accusantium possimus neque, itaque alias recusandae doloremque atque corporis? Totam ab eius laudantium alias perferendis. Quibusdam eligendi minus et distinctio qui voluptatibus id numquam debitis reiciendis corrupti similique ut, iste accusamus libero vitae. Sunt enim iusto nobis ducimus quo alias ex ratione nesciunt hic.
            </p>
            <h2 className={`${style.headings}`}>Services</h2>
            <p className={`${style.headingContent}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore natus vitae animi mollitia numquam amet! Iusto harum voluptate, fugit odio ab amet quia beatae sed accusantium possimus neque.
            </p>
            <ul>
                <li className={`${style.services}`}>Service1</li>
                <li className={`${style.services}`}>Service2</li>
                <li className={`${style.services}`}>Service3</li>
                <li className={`${style.services}`}>Service4</li>
                <li className={`${style.services}`}>Service5</li>
                <li className={`${style.services}`}>Service6</li>
            </ul>
            <h2 className={`${style.headings}`}>Contact</h2>
            <p className={`${style.headingContent}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore natus vitae animi mollitia numquam amet! Iusto harum voluptate, fugit odio ab amet quia beatae sed accusantium possimus neque.<br />
                <Link href='/contactpage' className={style.link}> Contact Us By Click Here</Link>
            </p>
        </main>
    )
}

export default About
