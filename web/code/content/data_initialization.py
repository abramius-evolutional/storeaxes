import models

def init_services():
    services = models.ServiceItem.objects.all()
    for service in services:
        service.remove()

    new_service = models.ServiceItem.objects.create(json_data='''{
    "title": "Beautiful Websites",
    "p": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...",
    "link": "services.html",
    "iconClassName": "icon-eye-open",
    "id":"1"
}''')
    new_service.save()

    new_service = models.ServiceItem.objects.create(json_data='''{
    "title": "Beautiful Websites",
    "p": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...",
    "link": "services.html",
    "iconClassName": "icon-table",
    "id":"2"
}''')
    new_service.save()

    new_service = models.ServiceItem.objects.create(json_data='''{
    "title": "Beautiful Websites",
    "p": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...",
    "link": "services.html",
    "iconClassName": "icon-magic",
    "id":"3"
}''')
    new_service.save()

    new_service = models.ServiceItem.objects.create(json_data='''{
    "title": "Beautiful Websites",
    "p": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et...",
    "link": "services.html",
    "iconClassName": "icon-print",
    "id":"4"
}''')
    new_service.save()