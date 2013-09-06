define([
	'jasmine',
	'streamhub-sdk/content/state-to-content',
	'stream/transform'],
function (jasmine, StateToContent, Transform) {
	describe('streamhub-sdk/streams/transforms/state-to-content', function () {
		it('is a Transform', function () {
			expect(StateToContent).toEqual(jasmine.any(Function));
			expect(StateToContent.prototype).toEqual(jasmine.any(Object));
			expect(StateToContent.prototype instanceof Transform).toBe(true);
		});
		describe('StateToContent.transform(state, opts)', function () {
			var transform = StateToContent.transform;
			it('is a static method', function () {
				expect(transform).toEqual(jasmine.any(Function));
			});
		});

		describe('instance', function () {
			var stateToContent,
		        mockStreamData,
		        mockState;
			beforeEach(function () {
				StateToContent.Storage.cache = {};
		        mockStreamData = {"states": {
		        	"tweet-312328006913904641@twitter.com":{"vis":1,"content":{"replaces":"","bodyHtml":"<a vocab=\"http://schema.org\" typeof=\"Person\" rel=\"nofollow\" resource=\"acct:14268796\" data-lf-handle=\"\" data-lf-provider=\"twitter\" property=\"url\" href=\"https://twitter.com/#!/TheRoyalty\" target=\"_blank\" class=\"fyre-mention fyre-mention-twitter\">@<span property=\"name\">TheRoyalty</span></a> hoppin on a green frog after the set at <a vocab=\"http://schema.org\" typeof=\"Person\" rel=\"nofollow\" resource=\"acct:1240466234\" data-lf-handle=\"\" data-lf-provider=\"twitter\" property=\"url\" href=\"https://twitter.com/#!/Horseshoe_SX13\" target=\"_blank\" class=\"fyre-mention fyre-mention-twitter\">@<span property=\"name\">Horseshoe_SX13</span></a> showcase during <a href=\"https://twitter.com/#!/search/realtime/%23sxsw\" class=\"fyre-hashtag\" hashtag=\"sxsw\" rel=\"tag\" target=\"_blank\">#sxsw</a> <a href=\"http://t.co/lUqA5TT7Uy\" target=\"_blank\" rel=\"nofollow\">pic.twitter.com/lUqA5TT7Uy</a>","annotations":{},"authorId":"190737922@twitter.com","parentId":"","updatedAt":1363299774,"id":"tweet-312328006913904641@twitter.com","createdAt":1363299774},"source":1,"lastVis":0,"type":0,"event":1363299777181024},
		        	"tweet-111919819891818@twitter.com":{"vis":1,"content":{"parentId": "tweet-312328006913904641@twitter.com", "replaces":"","bodyHtml":"<a vocab=\"http://schema.org\" typeof=\"Person\" rel=\"nofollow\" resource=\"acct:14268796\" data-lf-handle=\"\" data-lf-provider=\"twitter\" property=\"url\" href=\"https://twitter.com/#!/TheRoyalty\" target=\"_blank\" class=\"fyre-mention fyre-mention-twitter\">@<span property=\"name\">TheRoyalty</span></a> hoppin on a green frog after the set at <a vocab=\"http://schema.org\" typeof=\"Person\" rel=\"nofollow\" resource=\"acct:1240466234\" data-lf-handle=\"\" data-lf-provider=\"twitter\" property=\"url\" href=\"https://twitter.com/#!/Horseshoe_SX13\" target=\"_blank\" class=\"fyre-mention fyre-mention-twitter\">@<span property=\"name\">Horseshoe_SX13</span></a> showcase during <a href=\"https://twitter.com/#!/search/realtime/%23sxsw\" class=\"fyre-hashtag\" hashtag=\"sxsw\" rel=\"tag\" target=\"_blank\">#sxsw</a> <a href=\"http://t.co/lUqA5TT7Uy\" target=\"_blank\" rel=\"nofollow\">pic.twitter.com/lUqA5TT7Uy</a>","annotations":{},"authorId":"190737922@twitter.com","updatedAt":1363299774,"id":"tweet-111919819891818@twitter.com","createdAt":1363299774},"source":1,"lastVis":0,"type":0,"event":1363299777181024},
		        	"oem-3-tweet-312328006913904641@twitter.com":{"vis":1,"content":{"targetId":"tweet-312328006913904641@twitter.com","authorId":"-","link":"http://twitter.com/PlanetLA_Music/status/312328006913904641/photo/1","oembed":{"provider_url":"http://twitter.com","title":"Twitter / PlanetLA_Music: @TheRoyalty hoppin on a green ...","url":"","type":"rich","html":"<blockquote class=\"twitter-tweet\"><a href=\"https://twitter.com/PlanetLA_Music/status/312328006913904641\"></a></blockquote><script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>","author_name":"","height":0,"thumbnail_width":568,"width":0,"version":"1.0","author_url":"","provider_name":"Twitter","thumbnail_url":"https://pbs.twimg.com/media/BFWcquJCUAA7orG.jpg","thumbnail_height":568},"position":3,"id":"oem-3-tweet-312328006913904641@twitter.com"},"source":1,"lastVis":0,"type":3,"event":1363299777193595}},"authors":{"190737922@twitter.com":{"displayName":"PlanetLA_Music","tags":[],"profileUrl":"https://twitter.com/#!/PlanetLA_Music","avatar":"http://a0.twimg.com/profile_images/1123786999/PLAnew-logo_normal.jpg","type":3,"id":"190737922@twitter.com"}},"jsver":"10026","maxEventId":1363299777193595};
				mockThreadState = {"childContent":[{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>stream quickly pls</p>","id":"26447895","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372788991,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372788991},"source":5,"type":0,"event":1372788992101458},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>bam! indeed</p>","id":"26447894","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372787751,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372787751},"source":5,"type":0,"event":1372787751910104},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdfe333</p>","id":"26447893","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372787639,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372787639},"source":5,"type":0,"event":1372787639502487},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>gaggaaa</p>","id":"26447892","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372787050,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372787050},"source":5,"type":0,"event":1372787050300324},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asldkfljasdf</p>","id":"26447891","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372786675,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372786675},"source":5,"type":0,"event":1372786675685834},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>ace</p>","id":"26447890","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372786197,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372786197},"source":5,"type":0,"event":1372786197615157},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>eeeerrrrrrrr</p>","id":"26447889","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372786130,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372786130},"source":5,"type":0,"event":1372786131003617},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdfaseeeee</p>","id":"26447888","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372786033,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372786033},"source":5,"type":0,"event":1372786033899802},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>testy</p>","id":"26447887","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785971,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785971},"source":5,"type":0,"event":1372785971576983},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>once again</p>","id":"26447886","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785899,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785899},"source":5,"type":0,"event":1372785899797464},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>yeah yeah</p>","id":"26447885","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785788,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785788},"source":5,"type":0,"event":1372785789117862},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>gene gene gene 3</p>","id":"26447884","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785766,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785766},"source":5,"type":0,"event":1372785766672297},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>gene gene gene</p>","id":"26447883","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785755,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785754},"source":5,"type":0,"event":1372785755360361},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>no body</p>","id":"26447881","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372784376,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372784376},"source":5,"type":0,"event":1372784376320420},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdfasdfasdf</p>","id":"26447878","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372783735,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372783735},"source":5,"type":0,"event":1372783735820433},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>gssdf</p>","id":"26447876","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372783708,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372783707},"source":5,"type":0,"event":1372783708230680},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>clothes again 2</p>","id":"26447875","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372783654,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372783654},"source":5,"type":0,"event":1372783654514543},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>clothes again</p>","id":"26447874","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372783637,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372783637},"source":5,"type":0,"event":1372783638113650},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>Oh. Shit.</p>","id":"26447794","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372724323,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372724323},"source":5,"type":0,"event":1372724323603019},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>This is the shit.</p>","id":"26447787","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372714901,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372714901},"source":5,"type":0,"event":1372714901592472},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>put it on ebay!!! pls</p>","id":"26447773","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372712599,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372712599},"source":5,"type":0,"event":1372712600154560},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710986926</p>","id":"26447761","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710987,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710987},"source":5,"type":0,"event":1372710987453705},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710963003</p>","id":"26447760","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710963,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710963},"source":5,"type":0,"event":1372710963568013},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710901267</p>","id":"26447759","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710901,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710901},"source":5,"type":0,"event":1372710901840190},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710848870</p>","id":"26447758","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710849,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710849},"source":5,"type":0,"event":1372710849309361},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710845069</p>","id":"26447757","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710845,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710845},"source":5,"type":0,"event":1372710845603555},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710773907</p>","id":"26447756","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710774,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710774},"source":5,"type":0,"event":1372710774458637},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710406493</p>","id":"26447754","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710406,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710406},"source":5,"type":0,"event":1372710407227233},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372709251249</p>","id":"26447752","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372709251,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372709251},"source":5,"type":0,"event":1372709251698365},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372709220760</p>","id":"26447751","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372709221,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372709220},"source":5,"type":0,"event":1372709221854376},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372704197627</p>","id":"26447750","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372704197,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372704197},"source":5,"type":0,"event":1372704198684578},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf</p>","id":"26447734","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372702302,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372702302},"source":5,"type":0,"event":1372702302898773}],"vis":1,"content":{"parentId":"","bodyHtml":"<p>0 1372702303895</p>","annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"authorId":"system@labs-t402.fyre.co","updatedAt":1372702301,"id":"26447733","createdAt":1372702300},"source":5,"type":0,"event":1372702301681285};
				stateToContent = new StateToContent({ authors: mockStreamData.authors });
			});
			it('is instanceof StateToContent', function () {
				expect(stateToContent instanceof StateToContent).toBe(true);
			});
			it('is instanceof Transform', function () {
				expect(stateToContent instanceof Transform).toBe(true);
			});
			it('uses author information passed on construction as opts.authors', function () {
				var state = mockStreamData.states["tweet-312328006913904641@twitter.com"],
					content = stateToContent.transform(state);
				expect(content.author.id).toBe(state.content.authorId);
				expect(content.author.displayName).toBe('PlanetLA_Music');
			});
			it ("should handle child attachments if received out of order", function () {
                var parent = mockStreamData.states["tweet-312328006913904641@twitter.com"];
                var reply = mockStreamData.states["tweet-111919819891818@twitter.com"];
                var attachment = mockStreamData.states["oem-3-tweet-312328006913904641@twitter.com"];

                var attachmentContent = stateToContent.transform(attachment);
                var replyContent = stateToContent.transform(reply);
                var parentContent = stateToContent.transform(parent);

                expect(attachmentContent).not.toBeDefined();
                expect(replyContent).not.toBeDefined();
                expect(parentContent).toBeDefined();

                expect(parentContent.replies.length).toBe(1);
                expect(parentContent.attachments.length).toBe(1);
            });
            it("can transform a state with childContent (like from bootstrap)", function () {
            	var bootstrapContent = stateToContent.transform(mockThreadState);
            	expect(bootstrapContent.replies.length).toBe(32);
            });

            describe('.write', function () {
            	var mockThreadState;

	        	beforeEach(function () {
					mockThreadState = {"childContent":[{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>stream quickly pls</p>","id":"26447895","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372788991,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372788991},"source":5,"type":0,"event":1372788992101458},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>bam! indeed</p>","id":"26447894","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372787751,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372787751},"source":5,"type":0,"event":1372787751910104},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdfe333</p>","id":"26447893","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372787639,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372787639},"source":5,"type":0,"event":1372787639502487},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>gaggaaa</p>","id":"26447892","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372787050,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372787050},"source":5,"type":0,"event":1372787050300324},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asldkfljasdf</p>","id":"26447891","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372786675,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372786675},"source":5,"type":0,"event":1372786675685834},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>ace</p>","id":"26447890","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372786197,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372786197},"source":5,"type":0,"event":1372786197615157},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>eeeerrrrrrrr</p>","id":"26447889","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372786130,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372786130},"source":5,"type":0,"event":1372786131003617},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdfaseeeee</p>","id":"26447888","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372786033,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372786033},"source":5,"type":0,"event":1372786033899802},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>testy</p>","id":"26447887","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785971,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785971},"source":5,"type":0,"event":1372785971576983},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>once again</p>","id":"26447886","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785899,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785899},"source":5,"type":0,"event":1372785899797464},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>yeah yeah</p>","id":"26447885","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785788,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785788},"source":5,"type":0,"event":1372785789117862},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>gene gene gene 3</p>","id":"26447884","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785766,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785766},"source":5,"type":0,"event":1372785766672297},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>gene gene gene</p>","id":"26447883","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372785755,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372785754},"source":5,"type":0,"event":1372785755360361},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>no body</p>","id":"26447881","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372784376,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372784376},"source":5,"type":0,"event":1372784376320420},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdfasdfasdf</p>","id":"26447878","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372783735,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372783735},"source":5,"type":0,"event":1372783735820433},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>gssdf</p>","id":"26447876","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372783708,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372783707},"source":5,"type":0,"event":1372783708230680},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>clothes again 2</p>","id":"26447875","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372783654,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372783654},"source":5,"type":0,"event":1372783654514543},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>clothes again</p>","id":"26447874","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372783637,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372783637},"source":5,"type":0,"event":1372783638113650},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>Oh. Shit.</p>","id":"26447794","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372724323,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372724323},"source":5,"type":0,"event":1372724323603019},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>This is the shit.</p>","id":"26447787","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372714901,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372714901},"source":5,"type":0,"event":1372714901592472},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>put it on ebay!!! pls</p>","id":"26447773","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372712599,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372712599},"source":5,"type":0,"event":1372712600154560},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710986926</p>","id":"26447761","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710987,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710987},"source":5,"type":0,"event":1372710987453705},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710963003</p>","id":"26447760","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710963,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710963},"source":5,"type":0,"event":1372710963568013},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710901267</p>","id":"26447759","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710901,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710901},"source":5,"type":0,"event":1372710901840190},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710848870</p>","id":"26447758","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710849,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710849},"source":5,"type":0,"event":1372710849309361},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710845069</p>","id":"26447757","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710845,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710845},"source":5,"type":0,"event":1372710845603555},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710773907</p>","id":"26447756","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710774,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710774},"source":5,"type":0,"event":1372710774458637},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372710406493</p>","id":"26447754","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372710406,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372710406},"source":5,"type":0,"event":1372710407227233},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372709251249</p>","id":"26447752","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372709251,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372709251},"source":5,"type":0,"event":1372709251698365},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372709220760</p>","id":"26447751","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372709221,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372709220},"source":5,"type":0,"event":1372709221854376},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf 1372704197627</p>","id":"26447750","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372704197,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372704197},"source":5,"type":0,"event":1372704198684578},{"childContent":[],"vis":1,"content":{"parentId":"26447733","bodyHtml":"<p>asdf</p>","id":"26447734","authorId":"system@labs-t402.fyre.co","ancestorId":"26447733","updatedAt":1372702302,"annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"createdAt":1372702302},"source":5,"type":0,"event":1372702302898773}],"vis":1,"content":{"parentId":"","bodyHtml":"<p>0 1372702303895</p>","annotations":{"moderator":true,"procurementmeta":[{"networkId":"labs-t402.fyre.co","siteId":"303827","collectionRuleId":"10712944@fyre.io","collectionId":"10712944"}]},"authorId":"system@labs-t402.fyre.co","updatedAt":1372702301,"id":"26447733","createdAt":1372702300},"source":5,"type":0,"event":1372702301681285};	
            	});

            	it('can .write states, then read as Content', function () {
            		spyOn(stateToContent, '_write').andCallThrough();

            		// Write a State
            		var ret = stateToContent.write(mockThreadState),
            			onReadable = jasmine.createSpy();

            		stateToContent.on('readable', onReadable);

            		// ._write will be passed the state
            		expect(stateToContent._write).toHaveBeenCalledWith(mockThreadState, jasmine.any(Function));
	            	
	            	// readable will fire
	            	waitsFor(function () {
	            		return onReadable.callCount;
	            	}, 'readable to fire');

	            	// and then we can read out a Content instance with
	            	// this state's .id
	            	runs(function () {
	            		var content = stateToContent.read();
	            		expect(content.id).toBe("26447733");
	            	})
            	});
            });
		});
	});
});