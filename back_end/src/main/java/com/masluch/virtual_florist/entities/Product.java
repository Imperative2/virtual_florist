package com.masluch.virtual_florist.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Product
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private int productId;
	
	@Column(name = "price")
	private Double price;

	@Column(name = "name")
	private String name;

	@Column(name = "latin_name")
	private String latinName;

	@Column(name = "description")
	private String description;

	@Column(name = "type")
	private String type;

	@Column(name = "tags")
	private String tags;

	@Column(name = "available", columnDefinition = "BOOLEAN")
	private boolean available;

	@OneToOne(optional = true, cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
	@JoinColumn(name = "wiki_entry_id")
	private WikiEntry wikiEntry;

	@OneToMany(fetch = FetchType.LAZY,cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
	@JoinColumn(name = "product_id")
	private List<Photo> photos;

	public int getProductId()
	{
		return productId;
	}

	public void setProductId(int productId)
	{
		this.productId = productId;
	}

	public Double getPrice()
	{
		return price;
	}

	public void setPrice(Double price)
	{
		this.price = price;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getLatinName()
	{
		return latinName;
	}

	public void setLatinName(String latinName)
	{
		this.latinName = latinName;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getTags()
	{
		return tags;
	}

	public void setTags(String tags)
	{
		this.tags = tags;
	}

	public boolean isAvailable()
	{
		return available;
	}

	public void setAvailable(boolean available)
	{
		this.available = available;
	}

	public WikiEntry getWikiEntry()
	{
		return wikiEntry;
	}

	public void setWikiEntry(WikiEntry wikiEntry)
	{
		this.wikiEntry = wikiEntry;
	}

	public List<Photo> getPhotos()
	{
		return photos;
	}

	public void setPhotos(List<Photo> photos)
	{
		this.photos = photos;
	}

	@Override
	public String toString()
	{
		return "Product [productId=" + productId + ", price=" + price + ", name=" + name + ", latinName=" + latinName
				+ ", description=" + description + ", type=" + type + ", tags=" + tags + ", available=" + available
				+ ", wikiEntry=" + wikiEntry + ", photos=" + photos + "]";
	}

	
	
}
