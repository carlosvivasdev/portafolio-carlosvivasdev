import './btn.css'
interface BtnMainProps {
    cambiarFrase: () => void;
}
export const Btn_main = ({ cambiarFrase }: BtnMainProps) => {
    return (
        <>
            <button className='btn' onClick={cambiarFrase}>Dame otra frase</button>
        </>
    )
} 