.. currentmodule:: cryoet_data_portal

{% if obj.display %}
   {% set visible_children = obj.children|selectattr("display")|list %}

.. py:{{ obj.type }}:: {{ obj.short_name }}{% if obj.args %}({{ obj.args }}){% endif %}

   {% for (args, return_annotation) in obj.overloads %}
      {{ " " * (obj.type | length) }}   {{ obj.short_name }}{% if args %}({{ args }}){% endif %}

   {% endfor %}

   {% if obj.docstring %}

   {{ obj.docstring|indent(3) }}
   {% endif %}
   {% if visible_children %}
      {% set visible_attributes = visible_children|selectattr("type", "equalto", "attribute")|list %}
      {% if visible_attributes %}
**Attributes**

.. autoapisummary::

         {% for attribute in visible_attributes %}
   {{ attribute.id }}
         {% endfor %}
      {% endif %}
      {% for obj_item in visible_children|rejectattr("type", "equalto", "attribute")|list %}

.. autoapi{{obj_item.type}}:: {{ obj_item.name }}

      {% endfor %}
   {% endif %}
{% endif %}
