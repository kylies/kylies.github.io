---
title: About
description: my hello page description
hide_table_of_contents: true
---
import styles from './about.module.css';

<table className={styles.table}>
  <tr>
    <td colspan="2" className={styles.textbox}><h1>A little bit about me</h1></td>
    <td rowspan="3" className={styles.textbox}>Image in here</td>
  </tr>
  <tr>
    <td colspan="2" className={styles.textbox}>Text sub area</td>
  </tr>
  <tr>
    <td className={styles.textbox}>Favourite writing tropes:   <ul><li>The ship is alive</li>  <li>Humans are the problem</li>  <li>There is a gigantuan robot/monster</li></ul></td>
    <td className={styles.textbox}>Favourite game mechanics:</td>
  </tr>
</table>
