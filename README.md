# Preact Render Spy bug with Istanbul

Install with: `yarn`.

Then run `yarn start`.

Output:

```
() =&gt; {
  cov_2m8syrdd3k.f[0]++;
  cov_2m8syrdd3k.s[2]++;
  return React.createElement(&quot;div&quot;, null, () =&gt; {
    cov_2m8syrdd3k.f[1]++;
  });
}
```

Output without istanbul:

```
() =&gt; React.createElement(&quot;div&quot;, null, () =&gt; {})
```

The issue is that the two outputs should be the same!
