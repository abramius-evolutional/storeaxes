from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
import content.urls
import request.views
import basket.urls
import views

urlpatterns = [
    url(r'^admin/*', include(admin.site.urls)),
    url(r'^api/content/', include(content.urls)),
    url(r'^api/basket/', include(basket.urls)),
    url(r'^api/request/$', request.views.add_request),
    url(r'', views.main),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\
  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
