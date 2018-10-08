function tagdetails(tagName) {
	console.log(tagName);
    const tag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
    const detailName = tag + " Detail"; 
    document.getElementById("detail-name").innerHTML = detailName;
	switch (tagName) {
		case "comment" : {
			console.log("comment case");
			document.getElementById("usage").innerHTML = commentUsage;
			document.getElementById("attrib").innerHTML = commentAttrib;
			document.getElementById("example").innerHTML = commentExample;
			break;
		}
        case "doctype" : {
			console.log("comment case");
			document.getElementById("usage").innerHTML = doctypeUsage;
			document.getElementById("attrib").innerHTML = doctypeAttrib;
			document.getElementById("example").innerHTML = doctypeExample;
			break;
		}
		case "anchor" : {
			console.log("anchor case");
			document.getElementById("usage").innerHTML = anchorUsage;
			document.getElementById("attrib").innerHTML = anchorAttrib;
			document.getElementById("example").innerHTML = anchorExample;
			break;
		}
		case "abbr" : {
			document.getElementById("usage").innerHTML = abbrUsage;
			document.getElementById("attrib").innerHTML = abbrAttrib;
			document.getElementById("example").innerHTML = abbrExample;
			break;
		}
		case "address" : {
			document.getElementById("usage").innerHTML = addressUsage;
			document.getElementById("attrib").innerHTML = addressAttrib;
			document.getElementById("example").innerHTML = addressExample;
			break;
		}
		case "area" : {
			document.getElementById("usage").innerHTML = areaUsage;
			document.getElementById("attrib").innerHTML = areaAttrib;
			document.getElementById("example").innerHTML = areaExample;
			break;
		}
		case "article" : {
			document.getElementById("usage").innerHTML = articleUsage;
			document.getElementById("attrib").innerHTML = articleAttrib;
			document.getElementById("example").innerHTML = articleExample;
			break;
		}
        case "article" : {
			document.getElementById("usage").innerHTML = articleUsage;
			document.getElementById("attrib").innerHTML = articleAttrib;
			document.getElementById("example").innerHTML = articleExample;
			break;
		}
		case "aside" : {
			document.getElementById("usage").innerHTML = asideUsage;
			document.getElementById("attrib").innerHTML = asideAttrib;
			document.getElementById("example").innerHTML = asideExample;
			break;
		}
        case "audio" : {
			document.getElementById("usage").innerHTML = audioUsage;
			document.getElementById("attrib").innerHTML = audioAttrib;
			document.getElementById("example").innerHTML = audioExample;
			break;
		}
        case "bold" : {
			document.getElementById("usage").innerHTML = boldUsage;
			document.getElementById("attrib").innerHTML = boldAttrib;
			document.getElementById("example").innerHTML = boldExample;
            break;
		}
        case "base" : {
			document.getElementById("usage").innerHTML = baseUsage;
			document.getElementById("attrib").innerHTML = baseAttrib;
			document.getElementById("example").innerHTML = baseExample;
            break;
		}
        case "bdi" : {
			document.getElementById("usage").innerHTML = bdiUsage;
			document.getElementById("attrib").innerHTML = bdiAttrib;
			document.getElementById("example").innerHTML = bdiExample;
            break;
		}
        case "bdo" : {
			document.getElementById("usage").innerHTML = bdoUsage;
			document.getElementById("attrib").innerHTML = bdoAttrib;
			document.getElementById("example").innerHTML = bdoExample;
            break;
		}
        
		case "head" : {
			document.getElementById("usage").innerHTML = headUsage;
			document.getElementById("attrib").innerHTML = headAttrib;
			document.getElementById("example").innerHTML = headExample;
		}
	}
}

const commentUsage = "Defines the start and end of an HTML comment.";
const commentAttrib = "None.";
const commentExample = "&lt;!-- This is a comment --&gt;";

const doctypeUsage = "Declares to the browser how the document should be interpreted.";
const doctypeAttrib = "In HTML5, the only attribute should be &quot;html&quot;";
const doctypeExample = "&lt;!doctype html&gt;";

const anchorUsage = "The &lt;a&gt; (Anchor) element defines a hyperlink to a location on the same page or any other \
					 page on the Web. It can also be used to create an anchor point—a destination \
					 for hyperlinks within the content of a page, so that links aren't limited to connecting simply to \
					 the top of a page.";
const anchorAttrib = "<strong>download</strong><br> \
					  This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a \
					  resource so that when the user clicks on the link they will be prompted to save it as a local file. <br><br> \
					  <strong>href</strong><br> \
					  This was the single required attribute for anchors defining a hypertext source link, but is no longer \
					  required in HTML5. Omitting this attribute creates a placeholder link. The href attribute indicates the \
					  link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which \
					  specifies an internal target location (an ID) within the current document.<br><br> \
					  <strong>hreflang</strong><br> \
					  This attribute indicates the language of the linked resource. It is purely advisory. Use this attribute only \
					  if the href attribute is present.<br><br> \
					  <strong>ping</strong><br> \
					  The 'ping' attribute, if present, sends the URL of the resources a notification/ping if the user follows the \
					  hyperlink.<br><br>  \
					  <strong>rel</strong><br> \
					  For anchors containing the href attribute, this attribute specifies the relationship of the target object \
					  to the link object.<br><br> \
					  <strong>target</strong><br> \
					  This attribute specifies where to display the linked resource. In HTML5, it is a name of, or keyword for, \
					  a browsing context (for example, tab, window, or inline frame). The following keywords have special \
					  meanings:<br><br> \
					  <strong>_self</strong>: Load the response into the same HTML4 frame (or HTML5 browsing context) as the current \
					  one. This value is the default if the attribute is not specified.<br><br> \
					  <strong>_blank</strong>: Load the response into a new unnamed HTML5 browsing context.<br><br> \
					  <strong>_parent</strong>: parent browsing context of the current one. If there is no parent, this option \
					  behaves the same way as _self. <br><br> \
					  <strong>_top</strong>: Load the response into the top-level browsing context (that is, the browsing \
					  context that is an ancestor of the current one, and has no parent). If there is no parent, this option \
					  behaves the same way as _self. Use this attribute only if the href attribute is present. \
					  ";
const anchorExample = "&lt;a href&equals;https://developer.mozilla.org&gt;target&lt;/a&gt;";

const abbrUsage = "The &lt;abbr&gt; element (or HTML Abbreviation Element) represents an abbreviation and optionally provides \
				   a full description for it. If present, the title attribute must contain this full description and nothing else.";
const abbrAttrib = "Global Attributes Only.";
const abbrExample = "&lt;abbr title&equals;Hypertext Markup Language&gt;HTML&lt;/abbr&gt;";

const addressUsage = "The &lt;address&gt; element supplies contact information for its nearest &lt;article&gt; or  &lt;body&gt; ancestor.";
const addressAttrib = "Global Attributes Only.";
const addressExample = "";

const areaUsage = "The &lt;area&gt; element defines a hot-spot region on an image, and optionally associates it with a hypertext \
				   link. This element is used only within a map element.";
const areaAttrib = "<strong>alt</strong><br> \
					A text string alternative to display on browsers that do not display images. The text should be phrased so \
					that it presents the user with the same kind of choice as the image would offer when displayed without the \
					alternative text. In HTML4, this attribute is required, but may be the empty string (&equals;&equals;). \
					In HTML5, this attribute is required only if the href attribute is used.<br> \
					<strong>coords</strong><br> \
					A set of values specifying the coordinates of the hot-spot region. The number and meaning of the values \
					depend upon the value specified for the shape attribute. For a rect or rectangle shape, the coords value is \
					two x, y pairs: left, top, right, and bottom. For a circle shape, the value is x, y, r where x, y is a pair \
					specifying the center of the circle and r is a value for the radius. For a poly or polygon shape, the \
					value is a set of x, y pairs for each point in the polygon: x1, y1, x2, y2, x3, y3, and so on. If a percent \
					sign (&percnt;) is appended; in HTML5, the values are numbers of CSS pixels.<br> \
					<strong>download</strong><br> \
					This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a \
					resource so that when the user clicks on the link they will be prompted to save it as a local file. <br> \
					<strong>href</strong><br> \
					This was the single required attribute for anchors defining a hypertext source link, but is no longer \
					required in HTML5. Omitting this attribute creates a placeholder link. The href attribute indicates the \
					link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which \
					specifies an internal target location (an ID) within the current document.<br> \
					<strong>hreflang</strong><br> \
					This attribute indicates the language of the linked resource. It is purely advisory. Use this attribute only \
					if the href attribute is present.<br> \
					<strong>media</strong><br> \
					A hint of the media for which the linked resource was designed, for example print and screen. If omitted, it \
					defaults to all. Use this attribute only if the href attribute is present.> \
					";
					const areaExample = "";

const articleUsage = "The &lt;article&gt; element represents a self-contained composition in a document, page, application, or \
					  site, which is intended to be independently distributable or reusable. This could \
					  be a forum post, a magazine or newspaper article, a blog entry, an object, or any other independent item \
					  of content. Each article should be identified, typically by including a heading element) \
					  as a child of the article element.";
const articleAttrib = "Global Attributes only";
const articleExample = "";

const asideUsage = "The &lt;aside&gt; element represents a section of the page with content connected tangentially to the rest, \
					which could be considered separate from that content. These sections are often represented as sidebars \
					or inserts. They often contain the definitions on the sidebars, such as definitions from the glossary; \
					there may also be other types of information, such as related advertisements; the biography of the \
					author; web applications; profile information or related links on the blog.";
const asideAttrib = "Global Attributes only";
const asideExample = "";

const audioUsage = "The &lt;audio&gt; element is used to embed sound content in documents. It may contain one or more audio \
                    sources, represented using the src attribute or the &lt;source&gt; element; the browser will choose the most \
                    suitable one.";
const audioAttrib = "<strong>autoplay</strong><br> \
                    A Boolean attribute; if specified (even if the value is &quot;false&quot;!), the audio will automatically \
                    begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.<br><br> \
                    <strong>buffered</strong><br> \
                    An attribute you can read to determine which time ranges of the media have been buffered. This attribute \
                    contains a TimeRanges object.<br><br> \
                    <strong>controls</strong><br> \
                    If this attribute is present, the browser will offer controls to allow the user to control audio playback, \
                    including volume, seeking, and pause/resume playback.<br><br> \
                    <strong>loop</strong><br> \
                    A Boolean attribute; if specified, will automatically seek back to the start upon reaching the end of \
                    the audio. \<br><br> \
                    <strong>mozCurrentSampleOffset</strong><br> \
                    The offset, specified as the number of samples since the beginning of the audio stream, at which the audio \
                    is currently playing. <br><br> \
                    <strong>muted</strong><br> \
                    A Boolean attribute which indicates whether the audio will be initially silenced. Its default value is false. <br><br> \
                    <strong>played</strong><br> \
                    A TimeRanges object indicating all the ranges of the audio that have been played. <br><br> \
                    <strong>preload</strong><br> \
                    This enumerated attribute is intended to provide a hint to the browser about what the author thinks will \
                    lead to the best user experience. It may have one of the following values:<br> \
                    - <strong>none:</strong> indicates that the audio should not be preloaded;<br> \
                    - <strong>metadata:</strong> indicates that only audio metadata (e.g. length) is fetched;<br> \
                    - <strong>auto:</strong> indicates that the whole audio file could be downloaded, even if the user is not \
                    expected to use it; <br> \
                    - <strong>&quot;&quot; (Empty String): synonym of the auto value.<br><br> \
                    If not set, its default value is browser-defined (i.e. each browser may have its own default value). The \
                    spec advises it to be set to metadata.<br><br> \
                    <strong>src</strong><br> \
                    The URL of the audio to embed. This is optional; you may instead use the <source> element within the audio block \
                    to specify the audio to embed.<br><br> \
                    <strong>volume</strong><br> \
                    he playback volume, in the range 0.0 (silent) to 1.0 (loudest). \
                    ";
const audioExample = "";

const boldUsage = "Boldface.  Do not use in HTML5.  If absolutely necessary, use &lt;strong&gt, or preferably, font-weight in CSS.";
const boldAttrib = "Global Attributes only";
const boldExample = "";

const baseUsage = "The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. \
                  There can be only one <base> element in a document.  If multiple <base> elements are specified, only the \
                  first href and first target value are used; all others are ignored. The base URL of a document can be queried \
                  from a script using document.baseURI.";
const baseAttrib = "<strong>href</strong><br>  \
                   The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, \
                   this element must come before any other elements with attributes whose values are URLs. Absolute and relative \
                   URIs are allowed.<br><br> \
                   <strong>target</strong><br>  \A name or keyword indicating the default location to display the result when \
                   hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. It is a \
                   name of, or keyword for, a browsing context (for example: tab, window, or inline frame). The following \
                   keywords have special meanings:<br> \
                   <strong>_self</strong>:<br> Load the result into the same browsing context as the current one. This value \
                   is the default if the attribute is not specified.<br> \
                   <strong>_blank</strong>:<br> Load the result into a new unnamed browsing context.<br> \
                   <strong>_parent</strong>:<br> Load the result into the parent browsing context of the current one. If there \
                   is no parent, this option behaves the same way as _self.<br> \
                   <strong>_top<strong>:<br> Load the result into the top-level browsing context (that is, the browsing \
                   context that is an ancestor of the current one, and has no parent). If there is no parent, this option \
                   behaves the same way as _self. \
                   ";
const baseExample = "";

const bdiUsage = "";
const bdiAttrib = "";
const bdiExample = "";

const bdoUsage = "";
const bdoAttrib = "";
const bdoExample = "";

const blockquoteUsage = "The &lt;blockquote&gt; Element indicates that the enclosed text is an extended quotation. Usually, \
                        this is rendered visually by indentation. A URL for the source of the quotation may be given using \
                        the cite attribute, while a text representation of the source can be given using the &lt;cite&gt; element.";

const blockquoteAttrib = "<strong>cite<</strong><br> \
                         A URL that designates a source document or message for the information quoted. This attribute is \
                         intended to point to information explaining the context or the reference for the quote.<br><br> \
                         "; 

const headUsage = "The &lt;head&gt; element provides general information (metadata) about the document, including its title and links \
				   to definitions of scripts and style sheets.";
const headAttrib = "<strong>profile</strong><br> \
					The URIs of one or more metadata profiles, separated by white space. \
					";
const headExample = "";