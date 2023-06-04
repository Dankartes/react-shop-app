import { Grid, Card } from '@mui/material';
import styles from './HomeCard.module.css';

const HomeCard = ({ title, details, image, reversed }) => {
  if (reversed)
    return (
      <>
        <Grid
          sx={{ marginBottom: '3%', display: { md: 'flex', xs: 'none' } }}
          container
          spacing={2}
        >
          <Grid item md={6} xs={12}>
            <Card className={styles['shadow-box']}>
              <img className={styles.image} src={image} alt="products" />
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.details}>{details}</div>
          </Grid>
        </Grid>

        <Grid
          sx={{ marginBottom: '3%', display: { md: 'none', xs: 'flex' } }}
          container
          spacing={2}
        >
          <Grid item md={6} xs={12}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.details}>{details}</div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card className={styles['shadow-box']}>
              <img className={styles.image} src={image} alt="products" />
            </Card>
          </Grid>
        </Grid>
      </>
    );

  return (
    <Grid sx={{ marginBottom: '3%' }} container spacing={2}>
      <Grid item md={6} xs={12}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.details}>{details}</div>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card className={styles['shadow-box']}>
          <img className={styles.image} src={image} alt="products" />
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomeCard;
