import courses from './Data/courses'

const Course = () => {
    return (
        <>      
            <div id="title">
                <h5>Cursos Relevantes</h5>
            </div>
            <p>{courses.course_Name}</p>
        </>
    )
}
export default Course;