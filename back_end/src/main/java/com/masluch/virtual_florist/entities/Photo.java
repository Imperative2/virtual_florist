package com.masluch.virtual_florist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Photo
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "photo_id")
	private int photoId;

	@Column(name = "product_id")
	private Integer productId;

	@Column(name = "wiki_entry_id")
	private Integer wikiEntryId;

	@Column(name = "type")
	private String type;

	@Column(name = "description")
	private String description;

	@Column(name = "path")
	private String path;

	@Column(name = "enabled", columnDefinition = "BOOLEAN")
	private boolean enabled;

	public int getPhotoId()
	{
		return photoId;
	}

	public void setPhotoId(int photoId)
	{
		this.photoId = photoId;
	}

	public Integer getProductId()
	{
		return productId;
	}

	public void setProductId(int productId)
	{
		this.productId = productId;
	}

	public Integer getWikiEntryId()
	{
		return wikiEntryId;
	}

	public void setWikiEntryId(int wikiEntryId)
	{
		this.wikiEntryId = wikiEntryId;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getPath()
	{
		return path;
	}

	public void setPath(String path)
	{
		this.path = path;
	}

	public boolean isEnabled()
	{
		return enabled;
	}

	public void setEnabled(boolean enabled)
	{
		this.enabled = enabled;
	}

	@Override
	public String toString()
	{
		return "Photo [photoId=" + photoId + ", productId=" + productId + ", wikiEntry=" + wikiEntryId + ", type="
				+ type + ", description=" + description + ", path=" + path + ", enabled=" + enabled + "]";
	}

}
