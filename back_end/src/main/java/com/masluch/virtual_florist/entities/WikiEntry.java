package com.masluch.virtual_florist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WikiEntry
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "wiki_entry_id")
	private int wikiEntryId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "latin_name")
	private String latinName;
	
	@Column(name = "short_description")
	private String shortDescription;
	
	@Column(name = "long_description")
	private String longDescription;
	
	@Column(name = "treatment")
	private String treatment;
	
	@Column(name = "tips")
	private String tips;
	
	@Column(name = "tags")
	private String tags;

	public int getWikiEntryId()
	{
		return wikiEntryId;
	}

	public void setWikiEntryId(int wikiEntryId)
	{
		this.wikiEntryId = wikiEntryId;
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

	public String getShortDescription()
	{
		return shortDescription;
	}

	public void setShortDescription(String shortDescription)
	{
		this.shortDescription = shortDescription;
	}

	public String getLongDescription()
	{
		return longDescription;
	}

	public void setLongDescription(String longDescription)
	{
		this.longDescription = longDescription;
	}

	public String getTreatment()
	{
		return treatment;
	}

	public void setTreatment(String treatment)
	{
		this.treatment = treatment;
	}

	public String getTips()
	{
		return tips;
	}

	public void setTips(String tips)
	{
		this.tips = tips;
	}

	public String getTags()
	{
		return tags;
	}

	public void setTags(String tags)
	{
		this.tags = tags;
	}

	@Override
	public String toString()
	{
		return "WikiEntry [wikiEntryId=" + wikiEntryId + ", name=" + name + ", latinName=" + latinName
				+ ", shortDescription=" + shortDescription + ", longDescription=" + longDescription + ", treatment="
				+ treatment + ", tips=" + tips + ", tags=" + tags + "]";
	}
	
}
