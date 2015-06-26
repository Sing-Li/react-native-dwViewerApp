'use strict';

var DataSource = {
  getArticles: () => {
    return [

        {title: 'React: an Intrdouction', year: '2015', url: 'http://www.ibm.com/developerworks/library/wa-react-intro/', desc: 'For all JavaScript developers, learn to build high performance apps and  re-usable components with React in an afternoon'},
        {title: 'Create an IBM Watson explorer with React', year: '2015', url: 'http://www.ibm.com/developerworks/library/wa-watson-explorer-react-app/', desc: 'Use React and the Material-UI component library to build an app on IBM Bluemix that explores Watson services.'},
    
       {title: 'Instant web applications with Meteor', year: '2015', url: 'http://www.ibm.com/developerworks/library/wa-meteor-webapps/', desc: 'Build responsive web applications, from concept to scaled deployment, in record time with Meteor, the full stack JavaScript app platfom.'},
      {title: 'Deploy a golang photo archive to Bluemix', year: '2015', url: 'http://www.ibm.com/developerworks/cloud/library/cl-golang-photo-archive-bluemix/index.html', desc: 'Use the Go programming language to create a Bluemix-hosted application that uses Object Storage service v2 via the OpenStack Swift APIs and backed by the IBM public cloud.'},
        {title: 'Create mobile UIs with Famo.us', year: '2014', url: 'http://www.ibm.com/developerworks/library/wa-famous/', desc: 'Level up to a native-code user experience for JavaScript apps. With the Famo.us platform, mobile web UIs written in JavaScript can be as compelling as native-code. '},
        
        {title: 'Web Components with Polymer', year: '2014', url: 'http://www.ibm.com/developerworks/library/wa-polymer/', desc: 'Join the Web Components revolution with Polymer. Assemble modern web and mobile applications with reusable, composable visual and functional components.'},
    
        {title: 'Build a reactive sales chart with Meteor', year: '2014', url: 'http://www.ibm.com/developerworks/library/wa-bluemix-meteor-app/index.html', desc: 'Meteor simplifies the development of single page, real-time, streaming data update applications by moving the entire client and server stack to JavaScript.'},
        {title: '3D development with WebGL, Part 1', year: '2013', url: 'http://www.ibm.com/developerworks/web/library/wa-webgl1/', desc: 'Discover the 3D computer graphics evolution over the last three decades. Learn fundamental WebGL concepts.'},
        {title: '3D development with WebGL, Part 2', year: '2014', url: 'http://www.ibm.com/developerworks/web/library/wa-webgl2/', desc: 'Learn Three.js and SceneJS WebGL programming; create 3D scene fly-overs with tween.js.'},
        {title: '3D development with WebGL, Part 3', year: '2014', url: 'http://www.ibm.com/developerworks/web/library/wa-webgl3/', desc: 'Build a 3D WebGL game, a 10,000 points big data visualization, or control 3D scenes with Leap Motion gestures.'},
        {title: 'Rock\'em Sock\'em Robocode!', year: '2003', url: 'http://www.ibm.com/developerworks/library/j-robocode/', desc: 'Code and test your own robots. Join thousands around the world on one of the fastest, and certainly the most fun, ways to learn Java programming.'},
        {title: 'Rock\'em Sock\'em Robocode: Round 2', year: '2002', url: 'http://www.ibm.com/developerworks/library/j-robocode2/', desc: 'Pit your best robot against the best in the world! Try new APIs in creating your robot team. Learn advanced robot design strategies from the masters.'},
        {title: 'Taming your Tomcat: Filtering tricks for Tomcat 5',year: '2003',  url: 'https://www.ibm.com/developerworks/library/j-tomcat2/', desc: 'Leverage Tomcat 5\'s support for Servlet 2.4 and JSP 2.0 new filter features.'},
        {title: 'Introduction to Apache Maven 2', year: '2006', url:'http://www.ibm.com/developerworks/java/tutorials/j-mavenv2/', desc: 'Get started with the Apache Maven 2 build system.'}
        ];
    },
  getVideos: () => {
      return [
        {title: 'Sintel', icon: 'sintel.png', year: '2010', url: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4', desc: '15 minutes. A moving tale of a lonely woman in search of a lost dragon. Producer: Ton Roosendaal, Director: Colin Levy'},
        {title: 'Big Buck Bunny', icon: 'bigbuck.png', year: '2008', url: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4', desc: '10 minutes. Lovable giant rabbit with a heart of gold. Animated feature. Director: Sacha Goedegebure'},
        {title: 'Elephants Dream', icon: 'eledream.png', year: '2006', url: 'https://ia700406.us.archive.org/31/items/ElephantsDream/ed_1024_512kb.mp4',
            desc: '11 mintues. Two characters explore an infinite machine. Animated feature produced entirely using open source tools. Director: Bassam Kurdali'},
        {title: 'Code Rush', icon: 'coderush.png', year: '2000', url: 'https://archive.org/download/CodeRush_616/VTS_01_1.stream.mp4', desc: '56 minutes. Documentary tracking silicon valley software engineers working in Netscape Communications during 1998 '}
        ];
    },

};


module.exports = DataSource;