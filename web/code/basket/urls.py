from django.conf.urls import url
from django.conf import settings
import views

urlpatterns = [
    url(r'^items', views.items),
    url(r'^add_item', views.add_item),
    url(r'^delete_item', views.delete_item),
    url(r'^set_items_count', views.set_items_count),
    url(r'^make_order', views.make_order),
]
