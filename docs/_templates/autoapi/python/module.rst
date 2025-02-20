.. py:module:: {{ obj.name }}

.. currentmodule:: {{ obj.name }}

{% if obj.docstring %}
.. autoapi-nested-parse::

   {{ obj.docstring|indent(3) }}

{% endif %}

{% block content %}
   {% set visible_children = obj.children|selectattr("display")|list %}
   {% if visible_children %}
      {% set this_page_children = visible_children|rejectattr("type", "in", own_page_types)|list %}
      {% if this_page_children %}
         {% for obj_item in this_page_children %}
{{ obj_item.render()|indent(0) }}

----------------------------------------------------------------------------------------------------------------------------

         {% endfor %}
      {% endif %}
   {% endif %}
{% endblock %}

END.
