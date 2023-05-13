---
layout: main
---

<div class="abstract">
    <div class="banner">
        <div class="latest-symposium">
            <h4>Asian CHI Symposium 2021</h4>
            <p>The 2021 edition will be at CHI 2021 in Yokohama, Japan.</p>
        </div>
    </div>
    <p class="abstract-overview">
        The Asian CHI Symposium showcases the latest HCI work from <span class="about-highlight">Asia, the Asian diaspora and those focusing on incorporating Asian sociocultural factors in their design and implementation</span>. Aside from circulating ideas, identifying emerging research problems and envisioning future directions in human-computer interaction research, this symposium aims to foster social ties among academics (researchers and students) and practitioners and continuously grow a research community in Asia.
    </p>
    <h4>Latest News</h4>
    <ul class="sidebar-items">
        {% for item in site.data.news %}
            <li>
                <p><span class="news-date">{{ item.date }}</span> &#187; <span class="news-text">{{ item.text }}</span></p>
            </li>
        {% endfor %}
    </ul>
</div>

<div class="news-sidebar">
    <h4>Past Symposia</h4>
    <ul class="sidebar-items">
        {% for item in site.data.symposia %}
            <li>
                <p><a class="news-date" href="{{ item.link }}" target="_blank">{{ item.year }} Symposium</a> at <span class="news-text">{{ item.conf }}</span></p>
            </li>
        {% endfor %}
    </ul>
</div>

> Photo by <a href="https://unsplash.com/@shima_giraffe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nagatoshi Shimamura</a> on <a href="https://unsplash.com/s/photos/yokohama?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>