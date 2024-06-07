---
title: About
description: my hello page description
hide_table_of_contents: true
---
import styles from './about.module.css';

<table className={styles.table}>
  <tr>
    <td colspan="2" className={styles.textbox}><h1>This site & me</h1></td>
    <td rowspan="3" className={styles.textbox}>Image in here</td>
  </tr>
  <tr>
    <td colspan="2" className={styles.textbox}>This website is an attempt to get back to Old Internet. Simple blog updates whenever I want. A Webring of my friends own blogs. Posting about art that's more for learning than for exposure. Want that chill old internet pace while I learn some web development by running this site.</td>
  </tr>
  <tr>
    <td className={styles.textbox}>Favourite writing tropes:   <ul><li>The ship is alive</li>  <li>Humans are the problem</li>  <li>There is a gigantuan robot/monster</li></ul></td>
    <td className={styles.textbox}>Favourite game mechanics: <ul><li>Death is progress</li>  <li>There is water but it's not scary</li>  <li>There is a gigantuan robot/monster</li></ul></td>
  </tr>
</table>
