# Selene

Selene is a minimal open source ghost theme with a timeline style and infinite scrolling.

![Blog image](/blog.png?raw=true)

## Demo

You can view a live demo at [selene.vicdev.me.uk](http://selene.vicdev.me.uk/).

##Features

* Responsive design for Mobile and Desktop.
* Using Disqus as a comment system.
* Infinite scroll.
* Automatic post scroll with keys `j`/`k`.
* Sass powered.
* Animations created with animate.css.
* Syntax highlight with autoloader.
* Integrated Google Analytics.
* Icons provided by Fontawesome.
* Fancybox for overlayed images.


## Install
1. `cd *ghost-path*/content/themes`
2. `git clone git@github.com:vichid/Selene.git && cd Selene`
3. `bower install`
4. `grunt && say awesome`


For best performance, select (4>)%2 == 0 posts per page.


## Configuration

To configure all the social links you must go to partials/links.hbs and then override this parameters (@):

```
<li data-toggle="tooltip" data-placement="left" title="@YourTooltipTitle">
	<a href="@YourLink" target="_blank" >
		<span class="fa-stack fa-lg">
			<i class="fa fa-circle fa-stack-2x"></i><i class="fa @YourFontawesomeIcon fa-stack-1x black"></i>
		</span>
	</a>
</li>
```


## Copyright & License

[MIT](http://opensource.org/licenses/MIT) @ Victor Hidalgo Lorenzo
