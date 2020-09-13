import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacione(filter: {slug: { eq: $slug}}){
            nodes {
                tTulo
                contenido
                imagen {
                fluid (maxWidth: 1200){
                    ...GatsbyDatoCmsFluid
                  }
                }
            }
        }
     }
    `;

const HabitacionTemplate = ({data: { allDatoCmsHabitacione: {nodes} }}) => {

    const { tTulo, contenido, imagen } = nodes[0];
   // console.log(data.allDatoCmsHabitacione.nodes[0]);

    return( 
        <Layout>
            <main  
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}>
                <h1 
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                        `}
                    >{tTulo}</h1>
                <p>{contenido}</p>
                <Image  
                    fluid={imagen.fluid}
                    />
            </main>

        </Layout>
    )
}
export default HabitacionTemplate;