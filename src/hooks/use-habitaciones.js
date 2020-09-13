import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacione{
            nodes {
                tTulo
                id
                slug
                contenido
                imagen {
                fluid(maxWidth: 1200){
                    ...GatsbyDatoCmsFluid
                }
                }
            }
            }  
        }
        `);

        return data.allDatoCmsHabitacione.nodes.map(habitacion =>({
            titulo: habitacion.tTulo,
            id: habitacion.id,
            contenido: habitacion.contenido,
            imagen: habitacion.imagen,
            slug: habitacion.slug,
        }))
}
export default useHabitaciones;