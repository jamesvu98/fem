import qrImage from '../../assets/image-qr-code.png'
import qrStyle from './qr.module.css'

export const QrCode = () => {
    return (
        <div className={qrStyle.qrContainer}>
            <div className={qrStyle.imgContainer}><img src={qrImage} width="288" height="288"></img></div>
            <div className={qrStyle.content}>
                <p className={qrStyle.focus}>Improve your front-end skills by building projects</p>
                <p className={qrStyle.text}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div >
    )
};