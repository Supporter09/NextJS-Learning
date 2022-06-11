import Link from 'next/link';
import styles from '../../styles/Ball.module.css'

// This function runs before the component is rendered ( DO NOT write code that runs in browser in here)
export const getStaticProps = async () => {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { balls: data }
    }
}

const BallMain = ({balls}) => {
    return (  
        <div>
            <h1>Hello Me Ball Main HAI</h1>
            {balls.map(ball => (
                <Link href={"/ball/"+ ball.id} key = {ball.id}>
                    <a className={styles.single}>
                        <h3>{ ball.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default BallMain;