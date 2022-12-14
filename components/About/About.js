// Styles
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p>
          I&apos;ve spent my life pursuing music as a professional guitarist.
        </p>
        <p>
          I graduated from the University of the Arts in Philadelphia, PA in
          2013 with a degree in guitar performance and music education. I have
          always been fascinated with the idea of creating something that
          hasn&apos;t previously existed
          <span>- to breathe life into our ideas.</span>
        </p>
        <p>
          <span className={styles.banner}>Art is magic.</span>
        </p>
        <p>
          Over the years, I&apos;ve explored performing, writing, composing,
          arranging, recording, video production... you get the idea. I like
          making stuff.
        </p>
        <p>•••</p>
        <p>
          It wasn&apos;t until recently that I felt compelled to create with
          tools other than my guitar and manuscript paper. I&apos;m now
          exploring new ways of building stuff, focusing mostly on{' '}
          <span>websites</span> and <span>webapps</span>.
        </p>
        <p>
          It&apos;s pretty amazing how much creative control one has on the web.
          With code, it&apos;s possible to make almost anything, so the
          challenge is building unique, carefully branded websites and apps that
          feel intuitive and accessible for a diverse audience.
        </p>
        <p>
          <span className={styles.banner}>
            Creators should feel supported in as many ways as possible to do
            their best work.
          </span>
        </p>
        <p>
          My goal is to help people achieve their professional dreams by
          building a web experience that supports their vision and inspires
          creativity, all while prioritizing user experience. Please get in
          touch if you have a project you would like to build together!
        </p>
      </div>
    </section>
  )
}
