'use strict';

var React = require('react-native');
var {
 NavigatorIOS,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  AppRegistry,
  WebView,
  TouchableOpacity,
} = React;

var Video = require('react-native-video');
var DataSource = require('./datasource');


var VideoViewer = React.createClass({
  render: function ()  {
    return(

      <View style={styles.vidcontainer}>
      <Video source={this.props.source} // Can be a URL or a local file.
       rate={1.0}                   // 0 is paused, 1 is normal.
       volume={1.0}                 // 0 is muted, 1 is normal.
       muted={false}                // Mutes the audio entirely.
       paused={false}               // Pauses playback entirely.
       resizeMode="stretch"           // Fill the whole screen at aspect ratio.
       style={styles.video}
       />
       </View>

       );
  },

});

var VideosView = React.createClass({

 getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
     this.setState({
          dataSource: this.state.dataSource.cloneWithRows(DataSource.getVideos()),
          loaded: true,
        });
  },

 showVideo: function(title, url) {

    this.props.navigator.push({
      title: title,
      component: VideoViewer,
      passProps: {source: {uri: url}},



    });

  },


 renderVideo: function(video) {
            return (

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.showVideo(video.title, video.url)}>

              <View style={styles.videoscontainer}>
               <Image source={{uri: video.icon}} style={styles.vicon} />
              <View style={styles.videocellcontainer}>
                <View style={styles.celltitlerow}>
                  <Text style={styles.title}>{video.title}</Text>
                  <Text style={styles.year}>({video.year})</Text>
                </View>
                <Text style={styles.description}>{video.desc}</Text>
              </View>
              </View>
              </TouchableOpacity>

            );
          },



renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading articles...
        </Text>
      </View>
    );
  },



 render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderVideo}
        style={styles.listView}
      />
    );
},


});



var ArticlesView = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
     this.setState({
          dataSource: this.state.dataSource.cloneWithRows(DataSource.getArticles()),
          loaded: true,
        });
  },

showArticle: function(articleURL) {

  console.log('url is ' + articleURL);
    this.props.navigator.push({
      title: "Article",
      component: WebView,
       passProps: {url: articleURL},
    });
  },



 renderArticle: function(article) {
            return (

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.showArticle(article.url)}>
                  <View style={styles.cellcontainer}>
                      <View style={styles.celltitlerow}>
                        <Text style={styles.title}>{article.title}</Text>
                        <Text style={styles.year}>({article.year})</Text>
                      </View>
                      <Text style={styles.description}>{article.desc}</Text>
                </View>
                </TouchableOpacity>

            );
          },



renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading articles...
        </Text>
      </View>
    );
  },



 render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderArticle}
        style={styles.listView}
      />
    );
},




});

var dwViewerApp = React.createClass({

  onButPress: function() {
    this.refs.nav.push({
      component: VideosView,
      title: "Videos",
    });
  },
  render: function() {
    return (
    <NavigatorIOS ref='nav' style={styles.container}
      initialRoute={{
        component: ArticlesView,
        title: 'Articles',
        rightButtonTitle: 'Videos',
          onRightButtonPress:  this.onButPress,
      //  passProps: { myProp: 'foo' },
      }}

    />

    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  videoscontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
     borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,

  },


  cellcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,

  },
  celltitlerow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },


  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'left',
  },
  year: {
    textAlign: 'right',
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 8,
    marginLeft: 10,
  },
  description: {
    textAlign: 'left',
    fontSize: 12,
    fontStyle: 'italic'
  },

   emptyPage: {
    flex: 1,
    paddingTop: 64,
  },
  emptyPageText: {
    margin: 10,
  },
  listView: {

    backgroundColor: '#F5FCFF',
  },
   vicon: {
    width: 62,
     height: 60,
   },
   videocellcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingLeft: 5,

  },
 vidcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

AppRegistry.registerComponent('dwViewerApp', () => dwViewerApp);
