import Bullet from './Bullet';

function JobBullets({ jobBullets }) {

    const bullets = jobBullets.map((bullet, index) => {
        return(
            <Bullet
                key={index}
                bullet={bullet}
            />
            )
        })

    return(
        <dl>
            {bullets}
        </dl>
    )
}

export default JobBullets;