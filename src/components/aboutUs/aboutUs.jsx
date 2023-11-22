import { Grid } from '@mui/material'
import React from 'react'
import s from "./style.module.css"
import "../../style.css"

export function AboutUs() {
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 8, md: 10 }} direction={{ xs: 'column', lg: 'row', md: 'row' }} sx={{ backgroundColor: '#e9e9e9' }}>
                <Grid xs={12} sm={12} lg={6}>
                    <div className={s.about1}>
                        <span className={s.aboutBtn}>ABOUT CONMIX</span>
                        <h1 className={s.aboutUsHeading}>Alliance For Excellent</h1>
                        <p className={s.aboutUsPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, incidunt id adipisci quia, itaque consectetur nemo sunt illum exercitationem ipsum quaerat, alias officiis? Commodi dolorem est dolorum maxime quibusdam quaerat dolore dicta mollitia, magnam, nemo, soluta eum. Cumque itaque repellendus in asperiores quidem? Nostrum nisi ex, recusandae culpa cupiditate nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tempore minus hic repudiandae. Mollitia repellat deleniti tenetur repellendus porro eaque eum sapiente dolores voluptates recusandae, excepturi quisquam, rerum illum veniam ipsum hic saepe quos minus dolor laboriosam accusamus quis est Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni obcaecati maiores at itaque, vero quis minus a cupiditate dolorem minima quam. Similique est doloremque illo veniam praesentium magni laudantium Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deserunt, placeat nostrum, veniam consectetur perspiciatis odio autem mollitia omnis neque nihil velit alias ex harum facilis sequi dignissimos esse labore?</p>
                    </div>
                </Grid>
                <Grid xs={12} sm={12} lg={6}>
                    <div className="container">
                        <div className="image-stack">
                            <div className="image-stack__item image-stack__item--top">
                                <img class='image' src="https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className="image-stack__item image-stack__item--bottom">
                                <img class='image' src="https://images.unsplash.com/photo-1527410651988-c2f385ccd3f7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
